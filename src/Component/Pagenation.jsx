import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Pagenation(props) {
   
  const { paginate, totoalpage=100} = props;
   
  return (
    <div style={style.pagination}>
      <Stack>
        <Pagination  color="primary" count={totoalpage} onChange={(e,value)=> paginate(value)} />
      </Stack>
    </div>
  );
}

const style ={
  pagination: {
    // border:'1px solid red',
    display: 'flex',
    justifyContent: 'center',
    padding: '0.6rem'
  }
}
export default Pagenation;
