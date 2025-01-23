// const mongoose = require('mongoose');

// // ShareableLink Schema
// const shareableLinkSchema = new mongoose.Schema({
//   form: { type: mongoose.Schema.Types.ObjectId, ref: 'FormBot' }, 
//   linkId: { type: String, unique: true }, 
//   createdAt: { type: Date, default: Date.now }, 
// });

// const ShareableLink = mongoose.model('ShareableLink', shareableLinkSchema);

// module.exports = ShareableLink;




const mongoose = require('mongoose');

const shareableLinkSchema = new mongoose.Schema({
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    linkId: { type: String, unique: true, required: true },
    permission: { type: String, enum: ['edit', 'view'], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ShareableLink', shareableLinkSchema);
