import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
class MarketPrice {
    @PrimaryColumn()
    public type_id: number;

    @PrimaryColumn()
    public region_id: number;

    @PrimaryColumn()
    public location_id: number;

    @PrimaryColumn('datetime')
    public date: Date;

    @Column({ nullable: true })
    public buy_price_low: number;

    @Column({ nullable: true })
    public buy_price_avg: number;

    @Column({ nullable: true })
    public buy_price_high: number;

    @Column({ nullable: true })
    public sell_price_low: number;

    @Column({ nullable: true })
    public sell_price_avg: number;

    @Column({ nullable: true })
    public sell_price_high: number;

    @Column({ nullable: true })
    public buy_volumne_low: number;

    @Column({ nullable: true })
    public buy_volumne_avg: number;

    @Column({ nullable: true })
    public buy_volumne_high: number;

    @Column({ nullable: true })
    public sell_volumne_low: number;

    @Column({ nullable: true })
    public sell_volumne_avg: number;

    @Column({ nullable: true })
    public sell_volumne_high: number;
}

export default MarketPrice;