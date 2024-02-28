import ReactBarcode from 'react-jsbarcode';

function Barcode() {
  return (
    <ReactBarcode
      value="ABC123"
      options={{ format: 'code39' }}
      renderer="svg"
      width={20}
    />
  );
}

export default Barcode;
