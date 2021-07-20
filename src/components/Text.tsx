import React from 'react';

interface Properties {
  num: number;
}

export default function Text(props: Properties) {
    return <h1>Hello {props.num}</h1>;
  }