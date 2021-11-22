module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      descr: String,
      author: String,
      tag: String
     /*  published: Boolean */
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("news", schema);
  return Tutorial;
};
