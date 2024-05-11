import React from 'react'
import BentoTitle from '../bentoComponents/BentoTitle'
import DemoBlock from '../bentoComponents/DemoBlock'

const Demo = () => {
  return (
    <div className="block">
      <div className="grid md:grid-cols-row-col-8 md:grid-rows-row-col-8 gap-3 [&>*]:m-3">
        <BentoTitle content='React Practice Demo' />
        <div className=" col-start-1 col-end-5 row-start-2 row-end-4">
          <DemoBlock imgsrc='ToDoList' imgalt='ToDoList' title='Todo-List' bgcolor='bg-[#9fb0cf]' description='React - useState Hook, HTML, CSS, Responsible Web Development' />
        </div>
        <div className=" col-start-5 col-end-9 row-start-2 row-end-4">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description=''/>
        </div>
        <div className=" col-start-1 col-end-5 row-start-4 row-end-6" >
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description=''/>
        </div>
        <div className=" col-start-5 col-end-9 row-start-4 row-end-6">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description=''/>
        </div>
        <div className=" col-start-1 col-end-5 row-start-6 row-end-8">
          <DemoBlock imgsrc='' imgalt='' title='' bgcolor='' description=''/>
        </div>
      </div>
    </div>
  )
}

export default Demo