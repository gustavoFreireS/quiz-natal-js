import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Quiz from 'react-quiz-component';

const renderCustomResultPage = obj => {
  console.log(obj);
  return <Form obj={obj} />;
};

function App() {
  const quiz = {
    appLocale: {
      landingHeaderText: '<questionLength> Questões',
      question: 'Questão',
      startQuizBtn: 'Iniciar Quiz',
      resultFilterAll: 'Todos',
      resultFilterCorrect: 'Correto',
      resultFilterIncorrect: 'Incorreto',
      nextQuestionBtn: 'Próximo',
      resultPageHeaderText:
        'Vocêc completou o quiz acertou <correctIndexLength> de <questionLength> questões.'
    },
    quizTitle: 'Javascript Quiz',
    questions: [
      {
        question: "qual o valor de 'a' se:  var a = 1 < 2 ? 14 : 20",
        questionType: 'text',
        answers: ['2', 'undefined', '14', '20'],
        correctAnswer: '3',
        point: '1'
      },
      {
        question: 'Qual o tipo da variável b:  ```var b = 30 ```',
        answers: ['integer', 'numeric', 'numeral', 'number'],
        correctAnswer: '4',
        questionType: 'text',
        point: '1'
      },
      {
        question:
          'Qual dessas não é uma função built in de arrays em javascript?',
        questionType: 'text',
        answers: ['.find()', '.splice()', '.count()', '.reduce()'],
        correctAnswer: '3',
        point: '1'
      },
      {
        question:
          'Como descobrir o inteiro mais próximo de 1.25 em javascript?',
        answers: [
          'Math.rnd(1.25);',
          'ceil(1.25)',
          'round(1.25)',
          'Math.round(1.25)'
        ],
        correctAnswer: '4',
        point: '1',
        questionType: 'text'
      },
      {
        question: 'Qual desses não é um evento em javascript',
        answers: ['onkeydown', 'onkeystroke', 'onclick', 'onmouseover'],
        correctAnswer: '2',
        point: '1',
        questionType: 'text'
      },
      {
        question:
          'qual dessas opções demonstra a forma correta de fazer um request e receber dados de uma api?',
        answers: [
          "fetch('http://api/users') .then(function(response) { return response.data; })",
          "get('http://api/users').data",
          "ajax('http://api/users').get(data);",
          "get('http://api/users').resolve(function(data) { return data.users });"
        ],
        questionType: 'text',
        correctAnswer: '1',
        point: '1'
      },
      {
        question: 'como mostar uma caixa de alerta em javascript?',
        questionType: 'text',
        answers: [
          "alertBox('alerta');",
          "alert('alerta');",
          "Alert.box('alerta');",
          "Alert.prompt('alerta');"
        ],
        correctAnswer: '2',
        point: '1'
      },
      {
        question: 'qual a forma correta de criar uma função em javascript',
        questionType: 'text',
        answers: [
          'function myFunction -> { ... }',
          'function myFunction = () { ... }',
          'function myFunction() { ... }',
          'function:Myfunction { ... }'
        ],
        correctAnswer: '3',
        point: '1'
      },
      {
        question:
          'qual evento é executado quando clicamos em um elemento em uma página web?',
        answers: ['onmouseover', 'onmousemove', 'onclick', 'onmousedown'],
        correctAnswer: '3',
        questionType: 'text',
        point: '1'
      },
      {
        question: 'qual o resultado de:  "natal".split(\'\')',
        questionType: 'text',
        answers: ['nana', 'n, atal', 'n, a, t, a, l', 'talna'],
        correctAnswer: '3',
        point: '1'
      }
    ]
  };

  return (
    <Quiz
      quiz={quiz}
      showInstantFeedback={false}
      shuffle={true}
      showDefaultResult={false}
      customResultPage={renderCustomResultPage}
    />
  );
}

export default App;
