import React, {useState} from 'react';

const ShowList = (props) => {
  const {list, text} = props;

  return (
      <>
        {list.filter(item => item.toLowerCase().startsWith(text.toLowerCase())).map(item => <p key={item}>{item}</p>)}
      </>
  )
};

const FilterBox = (props) => {

  const {text, setText} = props;

  return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </div>
  )
}

export default function FilterList(props) {
  const list = ['first', 'second', 'aaa', 'Yael', 'Yaara'];
  const [text, setText] = useState('');

  return (
      <div>
        <FilterBox text={text} setText={setText}/>
        <ShowList list={list} text={text}/>
      </div>
  )
}