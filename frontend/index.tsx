import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

const RunApp = () => {
    const base = useBase();
    const table = base.getTableByName('Wordpress_ja');
    const records = useRecords(table);

    const getCombinationOfIDs = (new_id, old_ids) => {
        const combinationOfIDs = [];
        for (const old_id of old_ids.split(',')) {
            combinationOfIDs.push(
                {
                    'key': old_id * new_id,
                    'old_id': old_id,
                    'new_id': new_id
                }
            );
        }
        return combinationOfIDs
    }

    const getListOfRedirects = (records) => {
        const results = records.map(record => {
            const new_id = record.getCellValue(table.getFieldByName('新WP ID'));
            const old_ids = record.getCellValueAsString(table.getFieldByName('ID (from WP内関連)'))
            if (old_ids) {
                return getCombinationOfIDs(new_id, old_ids);
            }
        });

        return results
            .flat()
            .filter(Boolean)
            // .sort((a, b) => a['old_id'] - b['old_id'])
            .sort((a, b) => a['new_id'] - b['new_id']);
    }

    const printListOfRedirects = getListOfRedirects(records).map(combinationOfRedirect => {
        return (
            <div key={combinationOfRedirect['key']}>
                {combinationOfRedirect['old_id']},{combinationOfRedirect['new_id']}
            </div>
        )
    })

    return (
        <div>
            redirect_from,redirect_to<br />
            {printListOfRedirects}
        </div>
    )
}

initializeBlock(() => <RunApp />);
