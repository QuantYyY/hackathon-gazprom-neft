import { FC } from "react";

import { Grid, GridItem } from '@consta/uikit/Grid';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from "../../../../hook";

import DataArray from "../../ProposedWayContent/ProposedCardArea/DataArray/DataArray";
import ContentCard from "../../ProposedWayContent/ContentCard/ContentCard";

const CatalogCards: FC = () => {

    const store = useAppSelector(store => store.catalog);

    return (
        <>
            <Grid cols={3} gap='xl'>
                {store.selectedItem == 'Все' ?
                    (
                        <>
                            {
                                DataArray.map(data => (
                                    <GridItem key={uuidv4()}>
                                        <ContentCard {...data} />
                                    </GridItem>
                                ))
                            }
                        </>
                    )
                    : store.selectedItem === 'Пройденые' ?
                        (
                            <>
                                {
                                    DataArray.filter(el => el.status === 'finished').map(data => (
                                        <GridItem key={uuidv4()}>
                                            <ContentCard {...data} />
                                        </GridItem>
                                    ))
                                }
                            </>
                        ) : store.selectedItem === 'Не пройденные' ?
                            (
                                <>
                                    {
                                        DataArray.filter(el => (el.status === 'not-started' || el.status === 'started')).map(data => (
                                            <GridItem key={uuidv4()}>
                                                <ContentCard {...data} />
                                            </GridItem>
                                        ))
                                    }
                                </>
                            ) :
                            (
                                <>
                                    {
                                        DataArray.filter(el => el.categories.split(' • ')[1] === store.selectedItem).map(data => (
                                            <GridItem key={uuidv4()}>
                                                <ContentCard {...data} />
                                            </GridItem>
                                        ))
                                    }
                                </>
                            )
                }
            </Grid>
        </>
    );
}

export default CatalogCards;