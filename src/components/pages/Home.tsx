//import HookFormDemo from "../organisms/HookFormDemo";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
//import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function PDFDoc() {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default function Home() {
  return (
    <>
      <h3 className="site-preview-heading" id="big-footer">
        Home Section
      </h3>
      <div></div>
      <PDFViewer>
        <PDFDoc />
      </PDFViewer>
    </>
  );
}
