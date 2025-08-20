import React from 'react'
import FormatName from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE05/FormatName'
import Ex01 from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE01/Ex01'
import Ex02 from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE02/Ex02'
import Ex03 from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE03/Ex03'
import Ex04 from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE04/Ex04'
import Sum from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE06/Sum'
import Layout from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE07/Layout'
import Table from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE08/Table'
import TodoForm from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE09/TodoForm'
import TodoList from './components/PTIT_CNTT3_IT104_SESSION12_EXERCISE09/TodoList'


export default function App() {

  return (
    <div>
      {/* <FormatName></FormatName> */}
      {/* <Ex01></Ex01> */}
      {/* <Ex02></Ex02> */}
      {/* <Ex03></Ex03> */}
      {/* <div className='App'>
        <Ex04></Ex04>
      </div> */}
      {/* <Sum></Sum> */}
      {/* <Layout></Layout> */}
      {/* <Table></Table> */}
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo list</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
    rel="stylesheet"
  />
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div
        className="row d-flex justify-content-center align-items-center
              h-100"
      >
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <TodoForm></TodoForm>
              {/* Tabs navs */}
              <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active">Tất cả công việc</a>
                </li>
              </ul>
              <TodoList></TodoList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}


