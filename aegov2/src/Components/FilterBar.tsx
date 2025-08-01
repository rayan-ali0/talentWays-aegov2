import { useState } from "react"
import { DropDown } from "./DropDown"
import { SearchInput } from "./SearchInput"
const items = [{
  label: 'An Item1',
  id: 'item1'
}, {
  label: 'An Item2',
  id: 'item2'
}, {
  label: 'An Item3',
  id: 'item3'
}]

export const FilterBar = () => {
  const [searchValue,setSearchValue]=useState('')
  const [fileType, setTypeFile] = useState('')
  const [subTypeFile, setSubTypeFile] = useState('');
  const [court, setCourt] = useState('');
  const [year, setYear] = useState('');

  return (
    <div className='flex flex-wrap flex-row justfiy-center items-center lg:flex-col p-[24px] gap-6 w-full h-auto border border-aegold-500 rounded-[20px]'>
      <SearchInput labelTitle="الفلتر" placeHolder="ابحث بإسم أو رقم القضية"  setSearch={setSearchValue}/>
      <DropDown items={items} label="نوع الملف" value={fileType} onChange={setTypeFile} />
      <DropDown items={items} label="نوع الملف الفرعي" value={subTypeFile} onChange={setSubTypeFile} />
      <DropDown items={items} label="الجهة القضائية" value={court} onChange={setCourt} />
      <DropDown items={items} label="السنة" value={year} onChange={setYear} />
      <button className="aegov-btn w-full xs:min-w-[220px] h-[52px] lg:w-full" type="button">ابحث</button>
    </div>
  )
}
