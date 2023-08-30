// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// this code for own component
import User from '../src/componet_folder/User'
import Pen from '../src/componet_folder/Class_component'
import Mobile from '../src/componet_folder/Without_jsx'
import { EveNt } from './componet_folder/EveNt';
import Increase from './componet_folder/Increase';
import { Increase1 } from './componet_folder/Increase1';
import { GetinputboxValue } from './componet_folder/GetinputboxValue';
// import { Toggle } from './componet_folder/Toggle';
import { GetFormData } from './componet_folder/GetFormData';
import { ContitionalRendering } from './componet_folder/ContitionalRendering';
import BasicFormvalidation from './componet_folder/BasicFormvalidation';
import { SendFunctionAsAProps } from './componet_folder/SendFunctionAsAProps';
import Members from './componet_folder/Members';
import ClassComponentLifeCycle from './/componet_folder/ClassComponentLifeCycle'
import { useState } from 'react';
import ComponentDidMount from './componet_folder/ComponentDidMount'
import DidUpdate from './componet_folder/DidUpdatecomponent'
import ShouldComponentUpdate from './componet_folder/ShouldComponentUpdate';
import ComponentWillUnMount1 from './componet_folder/component/ComponentWillUnMount1';
import Hooks1 from './functional_Component/Hooks1';
import Hook2_useEffect from './functional_Component/Hook2_useEffect';
import { Hook2_useEffect2 } from './functional_Component/Hook2_useEffect2';
import Style1_test from './styleCss/Style_test';
import BootStrapReactTest from './styleCss/BootStrapReactTest';
import MapFunction from './operation/MapFunction';
import { BootStrapTable } from './operation/BootStrapTable';
import { NestedArray } from './operation/NestedArray';
import { SendLIstAsaProps } from './operation/SendLIstAsaProps';
import { ParentComponent } from './operation/ParentComponent';
import Purecomponent from './operation/Purecomponent';
import { Usememoeffect } from './functional_Component/Usememoeffect';
import RefInReact_ClassComponent from './functional_Component/RefInReact_ClassComponent';
import { HrTag } from './HrTag';
import { UseRefHook } from './functional_Component/UseRefHook';
import { ForwadRefParent } from './functional_Component/ForwadRefParent';
import ControlledComponent from './component/ControlledComponent';
import { UnControlledComponent } from './component/UnControlledComponent';
// import { useRef } from 'react'
import HocComponent from './component/HocComponent';
// '--------------------------------------------------------------------'
import GettingStrated from './Routerv6/GettingStrated';
import DynamicRouting from './Routerv6/DynamicRouting';
import CallGetApi from './FetchApi/CallGetApi';
import PostMethodApi from './FetchApi/methods/PostMethodApi';
import DeleteMethod from './FetchApi/methods/DeleteMethod';
import GetPreviousValue from './FetchApi/methods/GetPreviousValue';
import GetPreviousProps from './FetchApi/methods/GetPreviousProps';
import Parent from './functional_Component/ContextFile/Parent';
import { createContext } from "react";
import { BackGround } from './context/Context';



function App() {
  const [name, setName] = useState('Soubhagya')
  // let dAtA = 'kanhu'//
  function abc() {
    setName("SoubhaTarai")
  }
  function getData() {
    return <h1 className='text-danger'>kanhu</h1>
  }
  const fun = () => {
    alert('send props as a function')
  }

  const [theme, setTheme] = useState("light")

  const setBackground = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <BackGround.Provider value={{ setBackground: setBackground, theme: theme }}>
      <div className={`App bg-${theme} text-${theme === 'dark' ? "light" : "dark"}`}>

        <div class="mb-3 container ">
          <div class="row">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control col-8" id="exampleFormControlTextarea1" rows="10"></textarea>
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
          </div>
        </div>
        <GettingStrated className='bg-primary' />
        <Parent />

        {/* <GetPreviousProps/> */}
        {/* <GetPreviousValue/> */}

        {/* <PostMethodApi/> */}
        {/* <DeleteMethod/> */}
        {/* <CallGetApi/> */}

        {/* <DynamicRouting/> */}

        {/* <Header /> */}
        {/* <HrTag />
      <HocComponent />
      <HrTag />
      <UnControlledComponent />
      <ControlledComponent />
      <HrTag />
      <ForwadRefParent />
      <UseRefHook />
      <RefInReact_ClassComponent />
      <Usememoeffect />
      <HrTag />
      <Purecomponent />/
      <ParentComponent />
      <SendLIstAsaProps />
      <HrTag />
      <NestedArray />
      <BootStrapTable />
      <MapFunction />
      <BootStrapReactTest />
      <Style1_test />
      <HrTag />

      <Hook2_useEffect2 />
      <Hook2_useEffect />
      <Hooks1 />
      <HrTag />
      <ComponentWillUnMount1 />
      <ShouldComponentUpdate />
      <DidUpdate />
      <ClassComponentLifeCycle name={name} fun={abc} />
      <ContitionalRendering />
      <BasicFormvalidation />
      <Members fun={fun} />
      <Increase />
      <GetinputboxValue />
      <Increase1 className='text-success' />
      <User />
      <GetFormData />
      <Pen />
      <Mobile />
      <EveNt data={getData} />
      <SendFunctionAsAProps data={fun} />
      <ComponentDidMount /> */}
        {/* <Center/> */}
        {/* <Routes>
        <Route exact path='/home' element={< Home />} />
        <Route exact path='/about' element={< About />} />
        <Route exact path='/contact' element={< Contact />} />
        <Route exact={true} path='/' element={<Header />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes> */}


        {/* '_________________________________________________________________________/' */}

        {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> */}




      </div>
    </BackGround.Provider>
  );
}

export default App;
