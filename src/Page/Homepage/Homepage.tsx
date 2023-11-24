import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";

function Homepage() {
  const pdfExportComponent: any = useRef();

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <Button onClick={exportPDF}>Export to PDF</Button>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div>
          <h1>Hello PDF!</h1>
          <p>This is a sample content for the PDF.</p>
        </div>
      </PDFExport>
    </div>
  );
}

export default Homepage;
