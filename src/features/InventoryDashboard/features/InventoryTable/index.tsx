import { Table } from "@mantine/core"
import { useGetInventoryByUserIdQuery, User } from "../../../../store/api"
import ErrorPopup from "../../../../components/ErrorPopup"
import LoadingPopup from "../../../../components/LoadingPopup"

interface InventoryTableProps {
    user: User
}

const InventoryTable = ({ user }: InventoryTableProps) => {
    const { data = {
        inventories: []
    },
        isError,
        isFetching,
        isLoading } = useGetInventoryByUserIdQuery({
            userId: user.id
        })
    if (isError || data.inventories === undefined) {
        return <ErrorPopup />
    } else if (isFetching || isLoading) {
        return <LoadingPopup />
    } else {
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
}


export default InventoryTable
