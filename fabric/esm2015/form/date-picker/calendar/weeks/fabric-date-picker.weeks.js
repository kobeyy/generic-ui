/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FabricDatePickerWeeks {
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    getDaysInMonths(year, month) {
        this.resetWeeks();
        /** @type {?} */
        const numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
        for (let i = 1; i <= numberOfDaysInMonth; i++) {
            this.createWeeks(new Date(year, month, i));
        }
        return this.weeks;
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    createWeeks(date) {
        /** @type {?} */
        const day = date.getDate();
        if (this.weeks[0].length === 0 && day === 1) {
            this.createWeek(date, this.weeks[0]);
        }
        if (this.weeks[1].length === 0 && day > this.getLastDayNumber(this.weeks[0])) {
            this.createWeek(this.getLastDayDate(this.weeks[0]), this.weeks[1]);
        }
        if (this.weeks[2].length === 0 && day > this.getLastDayNumber(this.weeks[1])) {
            this.createWeek(this.getLastDayDate(this.weeks[1]), this.weeks[2]);
        }
        if (this.weeks[3].length === 0 && day > this.getLastDayNumber(this.weeks[2])) {
            this.createWeek(this.getLastDayDate(this.weeks[2]), this.weeks[3]);
        }
        if (this.weeks[4].length === 0 && day >= this.getLastDayNumber(this.weeks[3])) {
            this.createWeek(this.getLastDayDate(this.weeks[3]), this.weeks[4]);
        }
        if (this.weeks[5].length === 0 && day >= this.getLastDayNumber(this.weeks[4])) {
            this.createWeek(this.getLastDayDate(this.weeks[4]), this.weeks[5]);
        }
        this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
    }
    /**
     * @private
     * @param {?} date
     * @param {?} week
     * @return {?}
     */
    createWeek(date, week) {
        for (let i = 1; i <= 7; i++) {
            /** @type {?} */
            const isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
            /** @type {?} */
            let day;
            if (isFirstDaySunday) {
                day = date.getDate() - 6;
            }
            else {
                day = date.getDate() - date.getDay() + i;
            }
            /** @type {?} */
            let dayOfWeek = new Date(date.setDate(day));
            if (week.length < 7) {
                week.push(dayOfWeek);
            }
        }
    }
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    getLastDayNumber(week) {
        if (week.length === 7) {
            return week[week.length - 1].getDate();
        }
    }
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    getLastDayDate(week) {
        /** @type {?} */
        let lastDay = week[week.length - 1].getDate();
        return new Date(week[week.length - 1].setDate(lastDay));
    }
    /**
     * @private
     * @return {?}
     */
    resetWeeks() {
        this.weeks = [];
        this.weeks[0] = [];
        this.weeks[1] = [];
        this.weeks[2] = [];
        this.weeks[3] = [];
        this.weeks[4] = [];
        this.weeks[5] = [];
    }
}
FabricDatePickerWeeks.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerWeeks.prototype.weeks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLndlZWtzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBR2pDLGVBQWUsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O2NBQ1osbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtRQUVwRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLElBQVU7O2NBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBRTFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0s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LEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBN0VELFVBQVU7Ozs7Ozs7SUFFVixzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyV2Vla3Mge1xuXHRwcml2YXRlIHdlZWtzOiBBcnJheTxBcnJheTxEYXRlPj47XG5cblx0Z2V0RGF5c0luTW9udGhzKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IEFycmF5PEFycmF5PERhdGU+PiB7XG5cdFx0dGhpcy5yZXNldFdlZWtzKCk7XG5cdFx0Y29uc3QgbnVtYmVyT2ZEYXlzSW5Nb250aCA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApKS5nZXREYXRlKCk7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkRheXNJbk1vbnRoOyBpKyspIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vla3MobmV3IERhdGUoeWVhciwgbW9udGgsIGkpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMud2Vla3M7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVdlZWtzKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcblxuXHRcdGlmICh0aGlzLndlZWtzWzBdLmxlbmd0aCA9PT0gMCAmJiBkYXkgPT09IDEpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2VlayhkYXRlLCB0aGlzLndlZWtzWzBdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbMV0ubGVuZ3RoID09PSAwICYmIGRheSA+IHRoaXMuZ2V0TGFzdERheU51bWJlcih0aGlzLndlZWtzWzBdKSkge1xuXHRcdFx0dGhpcy5jcmVhdGVXZWVrKHRoaXMuZ2V0TGFzdERheURhdGUodGhpcy53ZWVrc1swXSksIHRoaXMud2Vla3NbMV0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy53ZWVrc1syXS5sZW5ndGggPT09IDAgJiYgZGF5ID4gdGhpcy5nZXRMYXN0RGF5TnVtYmVyKHRoaXMud2Vla3NbMV0pKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVdlZWsodGhpcy5nZXRMYXN0RGF5RGF0ZSh0aGlzLndlZWtzWzFdKSwgdGhpcy53ZWVrc1syXSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLndlZWtzWzNdLmxlbmd0aCA9PT0gMCAmJiBkYXkgPiB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1syXSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbMl0pLCB0aGlzLndlZWtzWzNdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbNF0ubGVuZ3RoID09PSAwICYmIGRheSA+PSB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1szXSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbM10pLCB0aGlzLndlZWtzWzRdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbNV0ubGVuZ3RoID09PSAwICYmIGRheSA+PSB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1s0XSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbNF0pLCB0aGlzLndlZWtzWzVdKTtcblx0XHR9XG5cblx0XHR0aGlzLndlZWtzID0gW3RoaXMud2Vla3NbMF0sIHRoaXMud2Vla3NbMV0sIHRoaXMud2Vla3NbMl0sIHRoaXMud2Vla3NbM10sIHRoaXMud2Vla3NbNF0sIHRoaXMud2Vla3NbNV1dO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVXZWVrKGRhdGU6IERhdGUsIHdlZWs6IEFycmF5PERhdGU+KTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcblx0XHRcdGNvbnN0IGlzRmlyc3REYXlTdW5kYXkgPSBkYXRlLmdldERheSgpID09PSAwICYmIHRoaXMud2Vla3NbMF0ubGVuZ3RoID09PSAwO1xuXHRcdFx0bGV0IGRheTtcblxuXHRcdFx0aWYgKGlzRmlyc3REYXlTdW5kYXkpIHtcblx0XHRcdFx0ZGF5ID0gZGF0ZS5nZXREYXRlKCkgLSA2O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF5ID0gZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpICsgaTtcblx0XHRcdH1cblx0XHRcdGxldCBkYXlPZldlZWsgPSBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF5KSk7XG5cblx0XHRcdGlmICh3ZWVrLmxlbmd0aCA8IDcpIHtcblx0XHRcdFx0d2Vlay5wdXNoKGRheU9mV2Vlayk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRMYXN0RGF5TnVtYmVyKHdlZWs6IEFycmF5PERhdGU+KTogbnVtYmVyIHtcblx0XHRpZiAod2Vlay5sZW5ndGggPT09IDcpIHtcblx0XHRcdHJldHVybiB3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uZ2V0RGF0ZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0TGFzdERheURhdGUod2VlazogQXJyYXk8RGF0ZT4pOiBEYXRlIHtcblx0XHRsZXQgbGFzdERheSA9IHdlZWtbd2Vlay5sZW5ndGggLSAxXS5nZXREYXRlKCk7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHdlZWtbd2Vlay5sZW5ndGggLSAxXS5zZXREYXRlKGxhc3REYXkpKTtcblx0fVxuXG5cdHByaXZhdGUgcmVzZXRXZWVrcygpIHtcblx0XHR0aGlzLndlZWtzID0gW107XG5cdFx0dGhpcy53ZWVrc1swXSA9IFtdO1xuXHRcdHRoaXMud2Vla3NbMV0gPSBbXTtcblx0XHR0aGlzLndlZWtzWzJdID0gW107XG5cdFx0dGhpcy53ZWVrc1szXSA9IFtdO1xuXHRcdHRoaXMud2Vla3NbNF0gPSBbXTtcblx0XHR0aGlzLndlZWtzWzVdID0gW107XG5cdH1cbn1cbiJdfQ==