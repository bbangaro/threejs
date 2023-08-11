declare module "@handsontable/react" {
  import React from "react";

  interface HotTableProps {
    className: string;
    data: any;
    rowHeaders: any;
    colHeaders: any;
    colWidths: string;
    width: any;
    height: any;
    licenseKey: any;
    contextMenu: boolean;
  }

  type FuncProps = {
    afterChange: () => void;
  };

  export class HotTable extends React.Component<HotTableProps & FuncProps> {}
}
