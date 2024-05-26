import React from 'react'
import BentoTitle from '../bentoComponents/BentoTitle'
import DemoBlock from '../bentoComponents/DemoBlock'

const Demo = () => {
  return (
    <div className="block">
      <div className="grid md:grid-cols-row-col-8 md:gird-row-4 sm:gap-3 [&>*]:m-3 justify-center
                      grid-cols-col-4">
        <BentoTitle content='React Practice Demo' />
        <div className=" col-start-1 col-end-5 row-start-2 row-end-4">
          <DemoBlock imgsrc='ToDoList' imgalt='ToDoList' title='Todo-List' bgcolor='bg-[#9fb0cf]' description='React - useState Hook, HTML, CSS, Responsible Web Development' demoLinkString='todolist' />
        </div>
        <div className=" md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-4
                         col-start-1 col-end-5 row-start-4 row-end-6">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description='' demoLinkString='developingPage' />
        </div>
      </div>
      <div className="grid md:grid-cols-row-col-8 md:grid-rows-8 sm:gap-3 [&>*]:m-3 justify-center
                      grid-cols-col-4">
        
        <BentoTitle content='React Component Demo' />
        <div className=" col-start-1 col-end-5 row-start-2 row-end-4" >
          <DemoBlock imgsrc='ToDoList' imgalt='ToDoList' title='Table' bgcolor='bg-[#DFC0C2]' description='111' demoLinkString='table' />
        </div>
        <div className=" md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-4
                         col-start-1 col-end-5 row-start-4 row-end-6">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description='' demoLinkString='developingPage' />
        </div>
        <div className=" col-start-1 col-end-5">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description='' demoLinkString='developingPage' />
        </div>
      </div>
    </div>
  )
}

export default Demo