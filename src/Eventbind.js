import React, { Component } from 'react'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { useState , useRef} from 'react';
import { registerDefaultFontFaces } from '@fluentui/style-utilities';


const stackTokens = { childrenGap: 0 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };

/*
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
*/
//const Eventbind = props => {
//    const {guid, deeplink} = props


function Eventbind() {

    function deeplinkClick()
  {
     // alert('Button Clicked');
     
      console.log(guid)
      

  }
  function copytoClipboard()
  {
      //alert('Button Clicked');
      deeplinkref.current.select();
    document.execCommand('copy');
      

  }

    const [guid, setGuid] = useState('')
    const [deeplink,setDeeplink] = useState('')
    const urlbase = 'msguides://' 
    const deeplinkref = useRef(null);
    //<PrimaryButton text = "Generate Deeplink" onClick = {deeplinkClick} ></PrimaryButton>
    //<PrimaryButton text = "Copy" onClick = {copyClick}></PrimaryButton>
    //<PrimaryButton  onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</PrimaryButton>
    return (
        
        <div className="App">
        <div>
        
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <TextField  required onChange = {e=>setGuid (e.target.value)}  />
          
        </Stack>
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <TextField ref = {deeplinkref} readOnly value = {urlbase+guid}/>
            
        
            <PrimaryButton  onClick={copytoClipboard}>Copy</PrimaryButton>
        </Stack>



        </div>
    </div>
        
    )
}

export default Eventbind

    

  
