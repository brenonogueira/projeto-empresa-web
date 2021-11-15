import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Divider from "@mui/material/Divider";

export const ModalContent = React.forwardRef(({ modalOpen, setOpen, relatorio, setRelatorio, dataAferido}, ref) => {
    return (
        <div ref={ref}>
 <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "#FFF",
          width: "90%",
          height: "89%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {relatorio?.cliente?.nome}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
              <strong>
                <span>CNPJ: </span>
              </strong>
              {relatorio?.cliente?.cnpj}
              <br />
              <strong>
                <span>OBRA: </span>
              </strong>
              {relatorio?.cliente?.obra}
              <br />
              <strong>
                <span>CONTRATO: </span>
              </strong>
              {relatorio?.cliente?.contrato}
              <br />
              <strong>
                <span>TELEFONE: </span>
              </strong>
              {relatorio?.cliente?.telefone}
              <br />
            </Typography>
            <Divider />
            <TableContainer>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>REG</TableCell>
                    <TableCell>NOTA</TableCell>
                    <TableCell>FCK PROJ</TableCell>
                    <TableCell>DATA MOLDAGEM</TableCell>
                    <TableCell>DATA RUPTURA</TableCell>
                    <TableCell>IDADE</TableCell>
                    <TableCell>SLUMP</TableCell>
                    <TableCell>HORA</TableCell>
                    <TableCell>LOCAL</TableCell>
                    <TableCell>PEÇA</TableCell>
                    <TableCell>CARGA</TableCell>
                    <TableCell>MPA</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {relatorio?.teste?.map((teste) => (
                    <TableRow key={teste.reg}>
                      <TableCell component="th" scope="row">
                        {teste?.reg}
                      </TableCell>
                      <TableCell>{teste?.nota}</TableCell>
                      <TableCell>{teste?.fckProj}</TableCell>
                      <TableCell>{teste?.moldagem}</TableCell>
                      <TableCell>{teste?.ruptura}</TableCell>
                      <TableCell>{teste?.idade}</TableCell>
                      <TableCell>{teste?.slump}</TableCell>
                      <TableCell>{teste?.hora}</TableCell>
                      <TableCell>{teste?.local}</TableCell>
                      <TableCell>{teste?.peca}</TableCell>
                      <TableCell>{teste?.carga}</TableCell>
                      <TableCell>{teste?.fck}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider />
            <Typography id="modal-modal-title"  sx={{ mt: 3}} variant="h6" component="h2">DADOS DA EQUIPE E EQUIPAMENTOS UTILIZADOS</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1}}>
              <strong><span>Equipamento: </span></strong>{relatorio?.equipamento}<br/>
              <strong><span>Marca: </span></strong>{relatorio?.marca}<br/>
              <strong><span>Série: </span></strong>{relatorio?.serie}<br/>
              <strong><span>Aferido: </span></strong>{dataAferido}<br/>
              <strong><span>Número do Certificado: </span></strong>{relatorio?.certificado}<br/>
              <strong><span>Técnico Conferente: </span></strong>{relatorio?.conferente}<br/>
              <strong><span>Ténico Responsável: </span></strong>{relatorio?.responsavel}<br/>
        </Typography>
          </CardContent>
        </Card>
      </Box>
        </div>
       
    )
})
