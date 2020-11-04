/*module.exports={
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  schema: "public",
  database: "smart",
  username: "postgres",
  password: "1234",
  define: {
    timestamps: true,
    underscored: true,
  },
}*/

module.exports={
  dialect: "postgres",
  url:process.env.DATABASE_URL,
  schema: "public",
 
  define: {
    timestamps: true,
    underscored: true,
  },
}


