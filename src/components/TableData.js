import React from 'react'
import Link from "next/link";
import { Avatar, Table } from "@radix-ui/themes";
import { TbCoinFilled } from "react-icons/tb";
import * as Tabs from "@radix-ui/react-tabs";
const TableData = () => {
  return (
    <div className="product_main_group4 my-5">
    <Tabs.Root defaultValue="offers">
      <div className="product_main_group4_sub1 flex justify-between mb-3">
        <div className="product_main_group4_innergroup1_sub1">
            <Tabs.List className="TabsTrigger_table flex gap-4 text-anovatext1">
              <Tabs.Trigger className="TabsTrigger_table" value="all">All</Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger_table" value="offers">Offers</Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger_table" value="withdrawals">Withdrawals</Tabs.Trigger>
            </Tabs.List>
        </div>

        <div className="product_main_group4_innergroup1_sub2">
          <button className="bg-anova4 hover:bg-green-600 hover:bg-green-600 px-4 py-2 rounded-lg">
            View all
          </button>
        </div>
      </div>

      <Tabs.Content value="all">
      <div className="product_main_group4-table text-blue-600">
      <Table.Root>
        <Table.Header>
          <Table.Row className="tablerows">
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Users</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course1.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/money1.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c4.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/brain.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c3.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/money2.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c2.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>


          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/Nepal.png"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course.jpg"
                color="blue"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c5.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>


          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course11.jpg"
                fallback="N"
                color="orange"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c4.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course12.jpg"
                fallback="D"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c3.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                fallback="B"
                color="pink"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c2.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course11.jpg"
                fallback="S"
                color="crimson"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table.Root>
    </div>
      </Tabs.Content>

      <Tabs.Content value="offers">
      <div className="product_main_group4-table text-blue-600">
      <Table.Root>
        <Table.Header>
          <Table.Row className="tablerows">
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Users</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course1.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/money1.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c4.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/brain.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c3.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/money2.jpg"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c2.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>


          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/Nepal.png"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course.jpg"
                color="blue"
                fallback="A"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c5.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>


          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course11.jpg"
                fallback="N"
                color="orange"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c4.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course12.jpg"
                fallback="D"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c3.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                fallback="B"
                color="pink"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c2.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

          <Table.Row className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src="/images/course11.jpg"
                fallback="S"
                color="crimson"
              />
              Danilo Sousa
            </Table.RowHeaderCell>
            <Table.Cell>
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src="/images/chat/c1.jpg"
                fallback="A"
              />
              danilo@example.com
            </Table.Cell>
            <Table.Cell>a minute ago</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              500
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table.Root>
    </div>
      </Tabs.Content>

      <Tabs.Content value="withdrawals">
        <h1 className="w-full h-52">Coming Soon</h1>
      </Tabs.Content>
    </Tabs.Root>

   
  </div>
  )
}

export default TableData 
