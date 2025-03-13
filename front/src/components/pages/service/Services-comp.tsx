const Services = () => {
    return (
        <section id="services" className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center">私たちのサービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="font-bold">ウェブデザイン</h3>
                    <p>魅力的で使いやすいウェブサイトを提供します。</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="font-bold">グラフィックデザイン</h3>
                    <p>ブランドのアイデンティティを強化します。</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="font-bold">ブランディング</h3>
                    <p>あなたのビジョンを形にします。</p>
                </div>
            </div>
        </section>
    );
};

export default Services;