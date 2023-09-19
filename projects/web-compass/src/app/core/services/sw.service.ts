import { ApplicationRef, Injectable, inject } from '@angular/core';
import { SwUpdate, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { concat, filter, first, interval } from 'rxjs';

@Injectable()
export class SwService {
  private appRef: ApplicationRef = inject(ApplicationRef)
  private swUpdate: SwUpdate = inject(SwUpdate)

  /**
   * The constructor function initializes the object and calls several methods related to logging,
   * checking for updates, prompting for updates, and handling unrecoverable states.
   */
  constructor() {
    if (!this.swUpdate.isEnabled) {
      console.log('pwa is no aviable')
      return
    };

    this.logUpdate()
    this.checkForUpdate()
    this.promptUpdate()
    this.handleUnrecoverableState()
  }

  /**
   *  The `logUpdate` function is subscribing to the `versionUpdates` observable provided by the
   * `SwUpdate` service. This observable emits events related to version updates of the
   *  application.
  */
  private logUpdate() {
    //   The code block you provided is subscribing to the `versionUpdates` observable provided by the
    //  `SwUpdate` service.This observable emits events related to version updates of the application.
    this.swUpdate.versionUpdates.subscribe((evt: VersionEvent) => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
        case 'NO_NEW_VERSION_DETECTED':
          console.log(`No new version: ${evt.version}`);
      }
    });
  }

  /**
   * The function `checkForUpdate()` checks for updates every six hours once the app is stable and logs
   * whether a new version is available or if the app is already on the latest version.
   */
  private checkForUpdate() {
    //  The code block is creating an observable `everySixHoursOnceAppIsStable$` that emits a value every six hours once the app is stable.
    // * Allow the app to stabilize first, before starting
    // * polling for updates with `interval()`.

    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    //  The code block is subscribing to the `everySixHoursOnceAppIsStable$` observable,
    // which emits a value. every six hours once the app is stable.
    everySixHoursOnceAppIsStable$
      .subscribe(async () => {
        try {
          // The line `const updateFound = await this.swUpdate.checkForUpdate();` is calling the
          // `checkForUpdate()` method provided by the `SwUpdate` service. This method checks if there is a new
          // version of the application available.
          const updateFound = await this.swUpdate.checkForUpdate();
          console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
        } catch (err) {
          console.error('Failed to check for updates:', err);
        }
      });
  }

  /**
   * The `promptUpdate` function subscribes to the `versionUpdates` observable and prompts the user to
   * update to the latest version if a `VersionReadyEvent` is emitted.
   */
  private promptUpdate() {
    //  The code block is subscribing to the `versionUpdates` observable provided by the `SwUpdate` service.
    // It filters the emitted events to only include events of type `VersionReadyEvent`.
    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(evt => {
        if (prompt(`${evt}`)) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }

  /**
   * The `handleUnrecoverableState` function subscribes to the `unrecoverable` observable provided by the
   * `SwUpdate` service and displays an alert with the error reason when an unrecoverable error occurs.
   */
  private handleUnrecoverableState() {
    // The code into here is subscribing to the `unrecoverable` observable provided by the `SwUpdate` service.
    this.swUpdate.unrecoverable.subscribe((event) => {
      alert('An error occurred that we cannot recover from:\n' + event.reason + '\n\nPlease reload the page.');
    });
  }
}
