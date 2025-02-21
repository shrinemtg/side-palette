

const Portfolio = () => {
    return (
        <section id="portfolio" className="p-8">
            <h2 className="text-3xl font-bold text-center">ポートフォリオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-200 p-4 rounded-lg">プロジェクト1</div>
                <div className="bg-gray-200 p-4 rounded-lg">プロジェクト2</div>
                <div className="bg-gray-200 p-4 rounded-lg">プロジェクト3</div>
            </div>
        </section>
    );
};

export default Portfolio;