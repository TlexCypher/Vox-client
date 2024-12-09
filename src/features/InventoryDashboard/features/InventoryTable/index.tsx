import { Table } from "@mantine/core"
import { User } from "../../../../store/api"

interface InventoryTableProps {
    user: User
}

const InventoryTable = ({ user }: InventoryTableProps) => {
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>カテゴリー</Table.Th>
                    <Table.Th>商品コード</Table.Th>
                    <Table.Th>商品名</Table.Th>
                    <Table.Th>備考</Table.Th>
                    <Table.Th>現在庫</Table.Th>
                    <Table.Th>{user.username}</Table.Th>
                </Table.Tr>
            </Table.Thead>
        </Table>
    )
}


export default InventoryTable
