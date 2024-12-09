import { Tabs } from "@mantine/core";
import ErrorPopup from "../../components/ErrorPopup";
import LoadingPopup from "../../components/LoadingPopup";
import { useGetUsersQuery } from "../../store/api";
import InventoryTable from "./features/InventoryTable";

interface InventoryDashboardProps {
}

const InventoryDashboard = ({ }: InventoryDashboardProps) => {

    const { data = {
        users: []
    },
        isError,
        isFetching,
        isLoading
    } = useGetUsersQuery()

    if (isError || data.users === undefined) {
        return (
            <ErrorPopup />
        )
    } else if (isFetching || isLoading) {
        return (
            <LoadingPopup />
        )
    } else {
        return (
            < Tabs defaultValue={`${data.users[0].username}`
            }>
                <Tabs.List>
                    {data.users.map((user) => (
                        <Tabs.Tab value={`${user.username}`} >
                            {user.username}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                {
                    data.users.map((user) => (
                        <Tabs.Panel value={`${user.username}`}>
                            <InventoryTable user={user} />
                        </Tabs.Panel>
                    ))
                }
            </Tabs >
        )
    }
};

export default InventoryDashboard;
