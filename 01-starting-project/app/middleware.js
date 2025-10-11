import { NextResponse } from "next/server";

export const middleware = (request) => {
    console.log(request);
  console.log("Middleware executed");
//   we can handle request here, maybe check it before passing data, or redirect to another page. Or block even
  return NextResponse.next();
};

export const config = {
  matcher: ["/news"],
};
