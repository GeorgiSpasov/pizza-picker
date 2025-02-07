import * as React from "react"
import Svg, { Ellipse, Path, G } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function BurrataLogo(props) {
  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 294.7 132.5"
      xmlSpace="preserve"
      enableBackground="new 0 0 294.7 132.5"
      {...props}
    >
      <Ellipse
        cx={147.4}
        cy={69}
        rx={147.4}
        ry={63.5}
        id="Ellipse_5"
        fill="#fff"
      />
      <Path
        className="st1"
        d="M154.3 66.3c-3.4-.7-7.6 2.4-10.1 5.1v-.8c0-.8-.6-1.9-1.5-2.4-.8-.4-1.5-.5-2-.2-.4.2-.6.6-.6 1.1-.1.7-.1 1.3-.2 1.9l-.1.1c-3.8 4.9-7.4 7.5-10.7 7.7-1.3-.2-1.7-1.7-2-3.9 0-1.6.1-3 .1-3.6.2-1.5-1.4-2.9-2.6-3-.8-.1-1.4.3-1.5 1.1-.5 2.6-3.6 9.2-6 10-.4.1-.6.1-.9-.2-.5-.4-.8-1.5-.8-3.1 0-2.5.7-4.7 1.3-5.2.3-.3.5-.6.6-1 0-.4 0-.9-.5-1.6-.8-1.1-1.9-1.7-2.8-1.4h-.1c-.9.4-1.4 1.5-1.8 2.4-.7 1.6-.8 3.4-.8 4.6 0 .4 0 .8.1 1.3-.6 0-1.3-.1-2.1-.1-2.5 0-5.6.2-8.2.5-1.8-3.9-4.8-7-8.9-9.2 5.9-2.7 9.7-8.1 9.6-13.5-.1-5.6-4.5-12.5-16.2-14.8-3.2-.7-6.7-1-10.2-1 .2-2.6.6-4.9.9-6.7v-.2c0-.9-1.1-1.7-2.2-1.9-.7-.1-1.2-.2-1.6.1-.4.3-.4.7-.5.8-.4 1.9-.8 5.1-1.1 8l-.8.1C58.7 38.5 47.8 45 43 53.5c-2.1 3.7-2.6 7.7-2.6 10.3 0 3.3.7 6.4 2.1 8.7 4.1 6.9 10.6 7.9 14.2 7.9 2.8 0 5.1-.6 5.7-1h.1c.8-.5.8-1.2.5-1.7-.3-.6-1.1-.9-1.9-.6-.9.2-1.9.4-3 .4-3.8 0-7.1-1.2-9.5-3.5-2.5-2.5-4-6.2-4-10.2 0-2.7.7-5.4 2-7.8 4.4-7.6 13.9-13.5 23.9-14.7-.6 11.2-1.5 24-1.5 36.2 0 2.1 0 4.3.1 6.4-4.8 2.4-8.2 5.4-9.6 8.6v.1c-.4.9-.5 1.6-.5 2.4 0 1.9 1.1 4.6 6.2 6.4 3.3 1.2 6.9 1.6 8.6 1.7h.6c3.9 0 7.9-.7 11.3-1.9 10.2-3.5 16.8-11.3 16.8-19.9 0-.6 0-1.2-.1-1.8 3-.4 6.4-.8 9.8-1 1.1 3 3.5 5.1 6 5.1 2.7 0 4.7-2.3 6.2-4.8 1.3 2.6 3.5 4.2 6 4.2 3.8.3 7-2.4 9.1-5.3-.2 3.4 0 4.3.2 4.9.3 1.2 1.8 2.2 2.9 2.2h.2c.6-.1 1-.6 1-1.2.1-.6.1-1.1.2-1.5.1-1 .2-1.4.3-1.8 1.4-4.8 6.2-9.2 9.4-9.9.1.5.4.9.9 1.1.6.2 1.6.1 2.5-1 .3-.5.4-1.1.1-1.7-.5-1.1-1.5-2.2-2.9-2.5zM75.2 40.9c2.9-.1 5.9.1 9.1.5 9.3 1.7 13.4 7.3 13.3 11.8-.1 4.1-4.8 9.8-10.3 10.8-1.9-.6-3.9-.9-5.6-.9-2.1 0-4 .4-5.4 1.1h-.1c-.8.3-1.4.8-1.1 2.3l.1.2c.9 1.8 5.5 1.8 7.4 1.7 1.6-.1 3.2-.1 4.8-.5 3.6 1.1 7.8 3.8 9.9 7.9-5.7.9-13.2 2-19.8 4.4l-1 .4-3.3 1.2c.2-12.5 1.1-27 2-40.9zm8.5 56.6c-3.6 1.2-7.5 1.7-11.1 1.6-5-.1-8.6-1-9.6-2.5-.3-.5-.4-1.1-.2-1.8 1.3-2.3 3.5-4.4 6.7-6.2.2 1.6.6 2.8 1 3.7.3.7 1.1 2 2.4 2.1h.1c.6 0 .9-.3 1.1-.5.2-.2.4-.6.2-1.2v-.2c-.5-1.2-.8-3.1-1-5.9 1.7-.8 3.5-1.4 5.1-2 .4-.2.9-.3 1.3-.5 5.3-1.9 11.1-3 18.7-4.2 0 4.6-1.6 13.2-14.7 17.6zM176.6 68.6c-.4-.9-1.3-2-2.8-2.3-3.4-.7-7.6 2.4-10.1 5.1v-.8c0-.8-.6-1.9-1.5-2.4-.8-.4-1.5-.5-2-.2-.4.2-.6.6-.6 1.1-1 10.7-.8 12.6-.5 13.5.3 1.2 1.8 2.2 2.9 2.2h.2c.6-.1 1-.6 1-1.2.1-.6.1-1.1.2-1.5.1-1 .2-1.4.3-1.8 1.4-4.8 6.2-9.2 9.4-9.9.1.5.4.9.9 1.1.6.2 1.6.1 2.5-1 .3-.6.3-1.2.1-1.9zM248.3 56.5v-.2l-.1-.2c-.4-.6-1.2-1.4-2-1.7l-.2-.1c-2.4-.5-5.9-.8-10.4-.8-6.2 0-13.3.5-19 .9l-2 .1c-.3 0-.7.1-1 .1.3-5.5.7-10.4 1.1-13.4V41c-.2-1.5-2-2.2-3.2-2.1-1.1.1-1.5.8-1.5 1.5-.3 4.6-.6 9.6-.9 14.6-8.5.7-13.2 1.3-18 2.1-.8.2-1.2.9-1.1 1.6.2 1.1 1.7 2.2 3.1 2 5.2-.9 10.3-1.3 15.7-1.8h.2c-.2 3.7-.3 7.5-.4 10.7v1.2c-.3 0-.7.2-1.2.7-2.3 3-8.1 7-11.3 6.3-.8-.3-1-1.6-.9-2.6.1-1 .4-2 .7-3 .1-.4.2-.7.3-1 .1-.3.2-.9-.3-1.7-.5-.8-1.6-1.6-2.5-1.5-.5 0-.8.3-1 .7l-.8 1.3c-1.7-.8-3.6-1.2-5.4-1.2-2.7 0-5.3.8-7.3 2.4-1.8 1.5-2.8 3.5-2.8 5.6 0 2 .8 3.8 2.4 5.1h.1c.9.7 1.9 1 3 1 3.7 0 7.9-3.5 10-5.6 1 2.3 2.7 3.8 5.1 4.5 3.3.9 8.5-1.9 10.4-4.1.5-.6 1-1.2 1.4-1.8v4.3c0 4.6.1 19.8 1.1 23.1.4 1.3 1.8 2.6 3 2.6h.3c.5-.1 1.1-.6 1-1.7v-.1c-.8-2.8-1.2-8.7-1.2-17.1 0-4.4.1-8.8.2-12.7 0-1.8.1-3.4.1-4.8l.5-11c.2 0 .5-.1.7-.1l1.3-.1c5.4-.4 12.9-1 19.8-1 4.7 0 8.4.3 11.1.8h.1c.6.1 1.1-.1 1.4-.4.3-.2.5-.7.4-1.2zm-67.9 22.3c-.2 0-.3-.1-.3-.2-.1-.2-.2-.5-.1-.8.7-3.4 5.2-4.7 8.1-4.7.4 0 .8 0 1.2.1-2.4 2.6-6.2 5.2-8.9 5.6z"
      />
      <Path
        className="st1"
        d="M249.1 71.8c-.2-.4-.5-.7-.9-.8-.3-.1-.9 0-1.6.7-2.3 3-8.1 7-11.3 6.3-.8-.3-1-1.6-.9-2.6.1-1 .4-2 .7-3 .1-.4.2-.7.3-1.1.1-.3.2-.9-.3-1.7-.5-.8-1.6-1.6-2.5-1.5-.5 0-.8.3-1 .7l-.8 1.3c-1.7-.8-3.6-1.2-5.4-1.2-2.7 0-5.3.8-7.3 2.4-1.8 1.5-2.8 3.5-2.8 5.6 0 2 .8 3.8 2.4 5.1h.1c.9.7 1.9 1 3 1 3.7 0 7.9-3.5 10-5.6 1 2.3 2.7 3.8 5.1 4.5 3.3.9 8.5-1.9 10.4-4.1 2.2-2.5 3.2-4.8 2.8-6zm-20.8 1.5c-2.4 2.5-6.1 5.1-8.9 5.5-.2 0-.3-.1-.3-.2-.1-.2-.2-.5-.1-.8.7-3.4 5.2-4.7 8.1-4.7.4.1.8.1 1.2.2z"
      />
      <G>
        <Path
          d="M112.1 92.8h-1.7V98.2h1.7v-5.4zM118.9 92.9c0 .4 0 .8-.1 1.2h2.2v4.3h1.7V94h2.2c0-.4.1-.8.1-1.2h-6.1zM133.3 92.9l-2.7 5.5h1.6l.6-1.3h2.4l.6 1.4 1.8-.1-2.8-5.5h-1.5zm-.1 3.3l.9-2 .8 2h-1.7zM146.2 97.2v-4.3h-1.7v5.5h4.4c0-.4.1-.8.1-1.2h-2.8zM157.5 92.8h-1.7V98.2h1.7v-5.4zM167 92.9l-2.7 5.5h1.6l.6-1.3h2.4l.6 1.4 1.9-.1-2.8-5.5H167zm-.1 3.3l.9-2 .8 2h-1.7zM182.8 94.2v2l-3.4-3.3h-1.2v5.5h1.5V95l3.5 3.4h1.2v-5.5h-1.5v1.3zM193.9 92.9l-2.7 5.5h1.6l.6-1.3h2.4l.6 1.4 1.9-.1-2.8-5.5h-1.6zm-.2 3.3l.9-2 .8 2h-1.7z"
          fill="#e2000f"
        />
      </G>
    </Svg>
  )
}

export default BurrataLogo
