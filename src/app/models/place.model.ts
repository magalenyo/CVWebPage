export class Place {

    public placeName: String = "Place name";
    public placeAddress: String = "C/ Valencia 5, 2º 2a";
    public placeImage: String = "https://images.squarespace-cdn.com/content/v1/50169e2584ae68067baa77af/1581508109776-XAU0FY8709NHUCDJV77K/ke17ZwdGBToddI8pDm48kOeC2_vIwtkNO4KLfB1JIsJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UedT6MCuDrG0_6iPwXLGF1669zXNhvZ0Gt3DqtjtSHkNlcTmcwU-Ed_fLjLxuPb0KQ/image00004.jpeg?format=1000w";

    constructor(placeName : string, placeAddress : string, placeImage : string) {
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeImage = placeImage;
    }
}