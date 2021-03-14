import { parseISO, format } from "date-fns";
import React from "react";

function Date({ dateString }) {
  const data = parseISO(dateString);
  return <time dateTime={dateString}>{format(data, "LLLL d, yyyy")}</time>;
}

export default Date;
