export declare const structureCommandHandlers: import("@angular/core").Provider[];
export declare const structureDomainEventHandlers: import("@angular/core").Provider[];
export declare const structureProviders: (any[] | import("@angular/core").ClassProvider | import("@angular/core").ValueProvider | import("@angular/core").ExistingProvider | import("@angular/core").ConstructorProvider | import("@angular/core").FactoryProvider | import("@angular/core").TypeProvider | {
    provide: typeof import("../domain/structure/structure-aggregate.repository").StructureAggregateRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵq;
} | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵnd;
})[];
