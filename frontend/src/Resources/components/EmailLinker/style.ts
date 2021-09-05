import styled from "styled-components"


export const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px ;
  



input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=text]:focus {
 outline: 2px solid;
 
}

span {
  color: green;
  font-size: 12px;
}

button {  
  width: 400px;
  height: 50px;
}

.email {
  display: flexbox;
  justify-content: center;
}

`