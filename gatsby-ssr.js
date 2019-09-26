import React from "react"
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        data-ad-client="ca-pub-8680661543036255"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />,
  ]);
}
