import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class SharedService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SharedService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SharedComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SharedComponent, isStandalone: true, selector: "lib-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared', standalone: true, imports: [], template: `
    <p>
      shared works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedComponent, SharedService };
//# sourceMappingURL=shared.mjs.map
