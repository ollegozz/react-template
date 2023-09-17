import React from 'react'
import Input from './UI/Input/Input'
import Select from './UI/Select/Select'

export default function PostFilter({filter, setFilter}) {
  return (
      <div>
          <Input
              placeholder='Поиск ...'
              value={filter.query}
              onChange={e => setFilter({...filter, query: e.target.value})}
               />
          <Select
              value={filter.sort}
              onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
              defaultValue='Сортировка'
              option={[
                  { value: 'title', name: 'По названию' },
                  { value: 'body', name: 'По описанию' }
              ]} />
      </div>
  )
}
