import React, {useRef} from 'react';

export default function InputFocus() {

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const boxesRef = [box1Ref, box2Ref, box3Ref, box4Ref];

  function moveFocusToNextBox(index) {
    boxesRef[index].current.value = '';
    boxesRef[(index + 1) % boxesRef.length].current.focus();
  }

  const boxStyle = {width: 50, height: 50, marginRight: 10}

  return (
      <div>
        <input type="text" ref={box1Ref} style={boxStyle}
               onKeyPress={() => moveFocusToNextBox(0)}/>
        <input type="text" ref={box2Ref} style={boxStyle}
               onKeyPress={() => moveFocusToNextBox(1)}/>
        <input type="text" ref={box3Ref} style={boxStyle}
               onKeyPress={() => moveFocusToNextBox(2)}/>
        <input type="text" ref={box4Ref} style={boxStyle}
               onKeyPress={() => moveFocusToNextBox(3)}/>
      </div>
  )
}