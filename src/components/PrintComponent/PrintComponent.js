import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import  {ModalContent}  from '../ContentModal/ModalContent';

export default function  PrintComponent ({  modalOpen, setOpen, relatorio, setRelatorio, dataAferido}) {
    const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <div style={{display: 'flex', justifyContent: 'flex-end', color: 'white', marginTop: '-8px', marginRight: '70px',  }}><button><LocalPrintshopIcon fontSize="large" /></button></div>}
        content={() => componentRef.current}
      />
      <ModalContent ref={componentRef} relatorio={relatorio} setRelatorio={setRelatorio} dataAferido={dataAferido} />
    </div>
  );
};