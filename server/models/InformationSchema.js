const mongoose = require("mongoose");

const UserInformationSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pno: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  s1: {
    type: String,
    required: true,
  },
  s2: {
    type: String,
    required: true,
  },
  s3: {
    type: String,
    required: true,
  },
  s4: {
    type: String,
    required: true,
  },
  s5: {
    type: String,
    required: false,
  },
  s6: {
    type: String,
    required: false,
  },
  s7: {
    type: String,
    required: false,
  },
  s8: {
    type: String,
    required: false,
  },
  s9: {
    type: String,
    required: false,
  },
  s10: {
    type: String,
    required: false,
  },
  e1: {
    company: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  e2: {
    company: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  e3: {
    company: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  e4: {
    company: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  exps: {
    type: Number,
    required: true,
  },
  p1: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  p2: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  p3: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  p4: {
    title: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    from: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
});

module.exports = mongoose.model("UserInformation", UserInformationSchema);
