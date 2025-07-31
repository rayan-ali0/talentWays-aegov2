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
  return (
    <div className='flex flex-col p-[24px] gap-6 w-full h-auto border border-aegold-500 rounded-[20px]'>
      <SearchInput labelTitle="الفلتر" placeHolder="ابحث بإسم أو رقم القضية" />
      <DropDown items={items} label="نوع الملف" />
      <DropDown items={items} label="نوع الملف الفرعي" />
      <DropDown items={items} label="الجهة القضائية" />
      <DropDown items={items} label="السنة" />
      <button className="aegov-btn" type="button">ابحث</button>

    </div>
  )
}
