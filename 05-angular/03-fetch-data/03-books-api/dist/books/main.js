(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset.scheduler-border {\n  border: solid 2px #DDD !important;\n  padding: 0 10px 10px 10px;\n  border-bottom: none;\n}\n\nlegend.scheduler-border {\n  width: auto !important;\n  border: none;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNEREQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-book-list></app-book-list>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Book It';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books */ "./src/app/books/index.ts");






// import { BookListComponent } from './books/book-list/book-list.component';
// import { BookNewComponent } from './books/book-new/book-new.component';
// import { BookDetailsComponent } from './books/book-details/book-details.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]].concat(_books__WEBPACK_IMPORTED_MODULE_6__["components"]),
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/book-details/book-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/books/book-details/book-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset.scheduler-border {\n  border: solid 2px #DDD !important;\n  padding: 0 10px 10px 10px;\n  border-bottom: none;\n}\n\nlegend.scheduler-border {\n  width: auto !important;\n  border: none;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9vay1kZXRhaWxzL2Jvb2stZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ib29rcy9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI0RERCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/books/book-details/book-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/books/book-details/book-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"book\">\n  <fieldset class=\"scheduler-border\">\n    <legend class=\"scheduler-border\">Selected Book</legend>\n    <table>\n      <tr>\n        <td>id:</td>\n        <td>{{ book.id }}</td>\n      </tr>\n\n      <tr>\n        <td>Title:</td>\n        <td>{{ book.title }}</td>\n      </tr>\n\n      <tr>\n        <td>Author:</td>\n        <td>{{ book.author }}</td>\n      </tr>\n\n      <tr>\n        <td>Year:</td>\n        <td>{{ book.year }}</td>\n      </tr>\n\n      <tr>\n        <td>Pages:</td>\n        <td>{{ book.pages }}</td>\n      </tr>\n\n      <tr>\n        <td>Publisher:</td>\n        <td>{{ book.publisher }}</td>\n      </tr>\n    </table>\n  </fieldset>\n</section>\n"

/***/ }),

/***/ "./src/app/books/book-details/book-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/books/book-details/book-details.component.ts ***!
  \**************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");



var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent() {
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BookDetailsComponent.prototype, "book", void 0);
    BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/books/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/books/book-details/book-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/books/book-list/book-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/books/book-list/book-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/books/book-list/book-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/books/book-list/book-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-book-new (createBook)='onCreate($event)'></app-book-new>\n\n<section>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Title</th>\n        <th>Year</th>\n        <th>Author</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let book of books\" (click)=\"onSelect(book)\">\n        <td>{{ book.id }}</td>\n        <td>{{ book.title }}</td>\n        <td>{{ book.year }}</td>\n        <td>{{ book.author }}</td>\n        <td><button (click)=\"onDelete($event, book)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n\n<app-book-details [book]='selectedBook'></app-book-details>\n\n"

/***/ }),

/***/ "./src/app/books/book-list/book-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/books/book-list/book-list.component.ts ***!
  \********************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService) {
        this.bookService = bookService;
        this.books = [];
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ng on init');
        this.sub = this.bookService.getBooks().subscribe(function (books) {
            console.log(books);
            _this.books = books;
        });
    };
    BookListComponent.prototype.ngOnDestroy = function () {
        console.log('ng on init');
        this.sub.unsubscribe();
    };
    BookListComponent.prototype.onSelect = function (book) {
        console.log('selecting book', book);
        // this.selectedBook = book;
        //                 (        expression       ) (if ture)(if false)
        this.selectedBook = this.selectedBook === book ? null : book;
        // if(this.selectedBook === book) {
        //   this.selectedBook = null;
        // } else {
        //   this.selectedBook = book;
        // }
    };
    BookListComponent.prototype.onCreate = function (book) {
        var _this = this;
        console.log('creating book', book);
        this.bookService.createBook(book).subscribe(function (createdBook) {
            console.log(createdBook);
            _this.books.push(createdBook);
        });
        // this.books.push(book);
    };
    BookListComponent.prototype.onDelete = function (event, book) {
        var _this = this;
        event.stopPropagation();
        this.bookService.removeBook(book.id).subscribe(function (removeBook) {
            console.log('deleting book', removeBook);
            _this.books = _this.books.filter(function (b) { return b.id !== removeBook.id; });
        });
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/books/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/books/book-list/book-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/books/book-new/book-new.component.css":
/*!*******************************************************!*\
  !*** ./src/app/books/book-new/book-new.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset.scheduler-border {\n  border: solid 2px #DDD !important;\n  padding: 0 10px 10px 10px;\n  border-bottom: none;\n}\n\nlegend.scheduler-border {\n  width: auto !important;\n  border: none;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9vay1uZXcvYm9vay1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYm9va3MvYm9vay1uZXcvYm9vay1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xuICBib3JkZXI6IHNvbGlkIDJweCAjREREICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/books/book-new/book-new.component.html":
/*!********************************************************!*\
  !*** ./src/app/books/book-new/book-new.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>Book-IT</h1>\n  <fieldset class=\"scheduler-border\">\n    <legend class=\"scheduler-border\">Create Book</legend>\n\n    <!-- {{ bookForm.valid | json }} -->\n\n    <form (submit)=\"onSubmit($event, bookForm)\" #bookForm = 'ngForm'>\n      <div class='form-group'>\n        <label for=\"\">Title</label>\n        <input class='form-control' type=\"text\" name=\"title\"\n          [(ngModel)]='book.title'\n          required\n          #title='ngModel'\n          minlength='3'>\n\n        <div *ngIf='(title.touched || title.dirty) && title.errors'>\n          <div *ngIf='title.errors.required'>\n            You must enter a title.\n          </div>\n          <div *ngIf='title.errors.minlength'>\n            Title must be more than {{ title.errors.minlength.requiredLength}} characters. {{ title.errors.minlength.actualLength }} characters is not enough.\n          </div>\n        </div>\n      </div>\n      <div  class=form-group>\n        <label for=\"\">Author</label>\n        <input class='form-control' type=\"text\" name=\"author\"\n          [(ngModel)]='book.author'\n          required\n          #author='ngModel'\n          minlength='3'>\n\n        <div *ngIf='(author.touched || author.dirty) && author.errors'>\n          <div *ngIf='author.errors.required'>\n            You must enter a author.\n          </div>\n          <div *ngIf='author.errors.minlength'>\n            Author must be more than {{ author.errors.minlength.requiredLength}} characters. {{ author.errors.minlength.actualLength }} characters is not enough.\n          </div>\n        </div>\n      </div>\n      <div class=form-group>\n        <label for=\"\">Year</label>\n        <input class='form-control' type=\"number\" name=\"year\" [(ngModel)]='book.year'  #year='ngModel'\n          min='1800'\n          max='2018'\n          required>\n\n        <div *ngIf='year.touched && year.errors'>\n          <div *ngIf='year.min'>\n            {{ year.min | json}}\n          </div>\n        </div>\n      </div>\n      <div class=form-group>\n        <label for=\"\">Pages</label>\n        <input class='form-control' type=\"number\" name=\"pages\" [(ngModel)]='book.pages'\n          min='1'\n          required>\n      </div>\n      <div class=form-group>\n        <label for=\"\">Publisher</label>\n        <input class='form-control' type=\"text\" name=\"publisher\" [(ngModel)]='book.publisher'\n          required\n          #publisher='ngModel'\n          minlength=\"3\">\n\n        <div *ngIf='(publisher.touched || publisher.dirty) && publisher.errors'>\n          <div *ngIf='publisher.errors.required'>\n            You must enter a publisher\n          </div>\n        </div>\n      </div>\n      <button *ngIf='bookForm.valid' class=\"btn btn-success float-right\" >Submit</button>\n    </form>\n  </fieldset>\n</section>\n"

/***/ }),

/***/ "./src/app/books/book-new/book-new.component.ts":
/*!******************************************************!*\
  !*** ./src/app/books/book-new/book-new.component.ts ***!
  \******************************************************/
/*! exports provided: BookNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookNewComponent", function() { return BookNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");



var BookNewComponent = /** @class */ (function () {
    function BookNewComponent() {
        this.book = new _models__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        this.createBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BookNewComponent.prototype.ngOnInit = function () {
    };
    BookNewComponent.prototype.onSubmit = function (event, form) {
        event.preventDefault();
        console.log('submitting form', this.book);
        // this.books.push(this.book);
        this.createBook.emit(this.book);
        this.book = new _models__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        form.reset();
        // console.log('books', this.books);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookNewComponent.prototype, "createBook", void 0);
    BookNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-new',
            template: __webpack_require__(/*! ./book-new.component.html */ "./src/app/books/book-new/book-new.component.html"),
            styles: [__webpack_require__(/*! ./book-new.component.css */ "./src/app/books/book-new/book-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookNewComponent);
    return BookNewComponent;
}());



/***/ }),

/***/ "./src/app/books/index.ts":
/*!********************************!*\
  !*** ./src/app/books/index.ts ***!
  \********************************/
/*! exports provided: components, BookDetailsComponent, BookNewComponent, BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/books/book-details/book-details.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/books/book-list/book-list.component.ts");
/* harmony import */ var _book_new_book_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-new/book-new.component */ "./src/app/books/book-new/book-new.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_0__["BookDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__["BookListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookNewComponent", function() { return _book_new_book_new_component__WEBPACK_IMPORTED_MODULE_2__["BookNewComponent"]; });




var components = [
    _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_0__["BookDetailsComponent"],
    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_1__["BookListComponent"],
    _book_new_book_new_component__WEBPACK_IMPORTED_MODULE_2__["BookNewComponent"],
];





/***/ }),

/***/ "./src/app/models/books.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/books.model.ts ***!
  \***************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _books_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.model */ "./src/app/models/books.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _books_model__WEBPACK_IMPORTED_MODULE_0__["Book"]; });




/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.base);
        // return of(BOOKS);
    };
    BookService.prototype.getBook = function (id) {
        return this.http.get(this.base + "/" + id);
    };
    BookService.prototype.createBook = function (book) {
        return this.http.post(this.base, book);
    };
    BookService.prototype.removeBook = function (id) {
        return this.http.delete(this.base + "/" + id);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.base + "/" + book.id, book);
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.service */ "./src/app/services/book.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return _book_service__WEBPACK_IMPORTED_MODULE_0__["BookService"]; });




/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/enkhbattulga/Projects/TinasAssignments/MEAN_STACK_TO_INSTRUCTORS_BRANCH/05-angular/03-fetch-data/books/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map