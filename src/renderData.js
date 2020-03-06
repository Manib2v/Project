    import React from 'react';
    import LoadData from './loadData';
    
    function renderData({ data }) {
        
        return (
            <div>
            <section className="mt3">
                    <div className="w-100 db flex flex-wrap">
                        {
                            data.schedule.map(map => <LoadData data={map} />)
                        }
                    </div>
                </section>
                </div>
        );
    }
    
    export default renderData;
    