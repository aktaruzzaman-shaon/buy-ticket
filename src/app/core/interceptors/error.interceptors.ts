// import { HttpErrorResponse, HttpHandler, HttpRequest } from "@angular/common/http";
// import { throwError } from "rxjs";

// intercept(req: HttpRequest<any>, next: HttpHandler) {
//   return next.handle(req).pipe(
//     catchError((error: HttpErrorResponse) => {
//       if (error.status === 401) {
//         // redirect to login
//       }

//       if (error.status === 500) {
//         alert('Server error occurred');
//       }

//       return throwError(() => error);
//     })
//   );
// }