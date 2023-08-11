import { HotTable, HotTableProps } from "@handsontable/react";
import { useEffect, useRef } from "react";

export const Table = () => {
  const HEADERS = ["이름", "팀", "사번", "입사일"];
  const DEFAULT_DATA = [
    ["장영준", "디자인", 1, "email1@email.com", "2023-01-01"],
    ["예혜정", "기획", 2, "email2@email.com", "2023-01-01"],
    ["권성욱", "개발", 3, "email3@email.com", "2023-01-01"],
  ];

  const hotRef = useRef<any>(null);
  useEffect(() => {
    if (hotRef.current) {
      const hotInstance = hotRef.current.hotInstance;
      const colWidths = [];

      for (let col = 0; col < hotInstance.countCols(); col++) {
        let defaultWidth = 50; // 기본 너비 설정

        for (let row = 0; row < hotInstance.countRows(); row++) {
          const cellValue = hotInstance.getDataAtCell(row, col);
          const cellWidth = cellValue.length * 13; // font px

          if (cellWidth > defaultWidth) {
            defaultWidth = cellWidth;
          }
        }

        colWidths.push(defaultWidth);
      }

      hotInstance.updateSettings({
        colWidths: colWidths,
      });
    }
  }, []);

  const hotTableProps: HotTableProps = {
    className: "custom-table",
    colHeaders: HEADERS,
    data: DEFAULT_DATA,
    rowHeaders: true,
    colWidths: "100%",
    width: "560",
    height: "auto",
    licenseKey: "non-commercial-and-evaluation",
    contextMenu: true,
  };

  const handleChange: any = (changes: any, source: any) => {
    console.log("changes", changes);
    console.log("source", source);
    // changes?.forEach(([row, prop, oldValue, newValue]) => {
    //   // Some logic...
    // }
  };

  return (
    <HotTable ref={hotRef} {...hotTableProps} afterChange={handleChange} />
  );
};
