function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
            <ul className="stat-list">{stats.map((item) => {
                return (<li className="item" key={item.id}>
                    <span className="label">{item.lable}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>)
            })}</ul>
        </section>
    )
}

export default Statistics
