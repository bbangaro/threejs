declare module "@handsontable/react" {
  import React from "react";

  interface HotTableProps {
    data: any;
    rowHeaders: any;
    colHeaders: any;
    height: any;
    licenseKey: any;
  }

  export class HotTable extends React.Component<HotTableProps> {}
}
