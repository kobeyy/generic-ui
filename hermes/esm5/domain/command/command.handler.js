/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isObservable } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CommandHandler = /** @class */ (function () {
    function CommandHandler(command, // any is required when inherited Command has more arguments than Command
    domainEvent, eventPublisher) {
        this.command = command;
        this.domainEvent = domainEvent;
        this.eventPublisher = eventPublisher;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.forCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return this.commandType === command.getMessageType();
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var result = this.handle(command);
        if (isObservable(result)) {
            ((/** @type {?} */ (result)))
                .pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                // trigger event
                _this.dispatchEvent(command, res);
            }));
        }
        else {
            this.dispatchEvent(command, (/** @type {?} */ (result)));
        }
    };
    /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    CommandHandler.prototype.dispatchEvent = /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    function (command, result) {
        if (this.domainEvent && this.eventPublisher) {
            /** @type {?} */
            var aggregateId = command.aggregateId;
            /** @type {?} */
            var event_1 = new ((/** @type {?} */ (this.domainEvent)))(aggregateId);
            event_1.setRequestCommand(command);
            if (result) {
                event_1.setPayload(result);
            }
            this.eventPublisher.publish(event_1);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CommandHandler.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.command.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.command)))).bind.apply(_a, tslib_1.__spread([void 0], args)))());
    };
    return CommandHandler;
}());
/**
 * @abstract
 */
export { CommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.command;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.domainEvent;
    /**
     * @type {?}
     * @protected
     */
    CommandHandler.prototype.eventPublisher;
    /**
     * @abstract
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handle = function (command) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVdEM7Ozs7SUFJQyx3QkFBdUMsT0FBNkIsRUFBRSx5RUFBeUU7SUFDdkgsV0FBZ0MsRUFDOUIsY0FBcUM7UUFGeEIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBSUQsbUNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxzQ0FBYTs7OztJQUFiLFVBQWMsT0FBZ0I7UUFBOUIsaUJBZ0JDOztZQWZNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVuQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QixDQUFDLG1CQUFBLE1BQU0sRUFBK0IsQ0FBQztpQkFDckMsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUDtpQkFDQSxTQUFTOzs7O1lBQUMsVUFBQyxHQUE4QjtnQkFFekMsZ0JBQWdCO2dCQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxtQkFBQSxNQUFNLEVBQW1CLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7Ozs7Ozs7SUFFTyxzQ0FBYTs7Ozs7O0lBQXJCLFVBQXNCLE9BQWdCLEVBQUUsTUFBd0I7UUFFL0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7O2dCQUV4QyxXQUFXLEdBQWdCLE9BQU8sQ0FBQyxXQUFXOztnQkFFNUMsT0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsV0FBVyxFQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFFeEQsT0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWpDLElBQUksTUFBTSxFQUFFO2dCQUNYLE9BQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFLLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7O0lBRU8sOENBQXFCOzs7O0lBQTdCOzs7WUFDTyxJQUFJLEdBQWdCLEVBQUU7O1lBQzNCLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQUssQ0FBQSxLQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBTyxDQUFDLENBQUEsMkNBQUksSUFBSSxNQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQzs7Ozs7Ozs7OztJQTFEQSxxQ0FBcUM7Ozs7O0lBRWYsaUNBQThDOzs7OztJQUM3RCxxQ0FBaUQ7Ozs7O0lBQ2pELHdDQUF3RDs7Ozs7O0lBSS9ELHlEQUFpRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICcuL2V4ZWN1dGUtcmVzcG9uc2UnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQYXlsb2FkIH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50LnBheWxvYWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbWFuZEhhbmRsZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZFR5cGU6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kOiB0eXBlb2YgQ29tbWFuZCB8IGFueSwgLy8gYW55IGlzIHJlcXVpcmVkIHdoZW4gaW5oZXJpdGVkIENvbW1hbmQgaGFzIG1vcmUgYXJndW1lbnRzIHRoYW4gQ29tbWFuZFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50PzogdHlwZW9mIERvbWFpbkV2ZW50LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQdWJsaXNoZXI/OiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHRcdHRoaXMuY29tbWFuZFR5cGUgPSB0aGlzLmNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRhYnN0cmFjdCBoYW5kbGUoY29tbWFuZDogQ29tbWFuZCk6IEV4ZWN1dGVSZXNwb25zZSB8IE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPjtcblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0aGFuZGxlQ29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGUoY29tbWFuZCk7XG5cblx0XHRpZiAoaXNPYnNlcnZhYmxlKHJlc3VsdCkpIHtcblx0XHRcdChyZXN1bHQgYXMgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzOiB2b2lkIHwgRG9tYWluRXZlbnRQYXlsb2FkKSA9PiB7XG5cblx0XHRcdFx0XHQvLyB0cmlnZ2VyIGV2ZW50XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGNvbW1hbmQsIHJlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoY29tbWFuZCwgcmVzdWx0IGFzIEV4ZWN1dGVSZXNwb25zZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkaXNwYXRjaEV2ZW50KGNvbW1hbmQ6IENvbW1hbmQsIHJlc3VsdD86IEV4ZWN1dGVSZXNwb25zZSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuZG9tYWluRXZlbnQgJiYgdGhpcy5ldmVudFB1Ymxpc2hlcikge1xuXG5cdFx0XHRsZXQgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5hZ2dyZWdhdGVJZDtcblxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgKHRoaXMuZG9tYWluRXZlbnQgYXMgYW55KShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGV2ZW50LnNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQpO1xuXG5cdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdGV2ZW50LnNldFBheWxvYWQocmVzdWx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ldmVudFB1Ymxpc2hlci5wdWJsaXNoKGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpOiBDb21tYW5kIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSB0aGlzLmNvbW1hbmQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZCBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxufVxuIl19