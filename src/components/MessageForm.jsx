import React, { useState } from 'react';

const MessageForm = () => {
  const [messageType, setMessageType] = useState('upcoming');
  const [recipientGroup, setRecipientGroup] = useState('All Citizens');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageContent, setMessageContent] = useState('');

  const handleTabChange = (type) => {
    setMessageType(type);
  };

  const handleSubmit = () => {
    alert('Message Sent!');
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen max-w-5xl ">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Tax Payment Notification System</h1>

        {/* Tab navigation */}
        <div className="flex gap-5 mb-6">
          <button
            className={`px-4 py-2 rounded-t-lg ${messageType === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('upcoming')}
          >
            Upcoming Payment Reminder
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${messageType === 'overdue' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('overdue')}
          >
            Overdue Payment Notice
          </button>
        </div>

        {/* Message Type */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option value="upcoming">Reminder (Before Deadline)</option>
            <option value="overdue">Overdue Notice (After Deadline)</option>
          </select>
        </div>

        {/* Recipient Group */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Recipient Group</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={recipientGroup}
            onChange={(e) => setRecipientGroup(e.target.value)}
          >
            <option value="All Citizens">All Citizens</option>
            <option value="Citizens with Unpaid Taxes">Citizens with Unpaid Taxes</option>
          </select>
        </div>

        {/* Message Title */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message Title</label>
          <div className="flex items-center">
            <span className={`px-3 py-1 rounded-l-lg ${messageType === 'overdue' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
              {messageType === 'overdue' ? 'Overdue' : 'Reminder'}
            </span>
            <input
              className="w-full p-2 border border-gray-300 rounded-r-md"
              type="text"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              placeholder={messageType === 'overdue' ? 'OVERDUE TAX PAYMENT NOTICE' : 'TAX PAYMENT DEADLINE REMINDER'}
            />
          </div>
        </div>

        {/* Message Content */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message Content</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder="Enter message content here"
            rows="6"
          />
        </div>

        {/* Preview */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Message Preview</h2>
          <div className="bg-gray-50 p-4 border border-gray-300 rounded-md mt-2">
            <p className="font-bold">MINISTRY OF FINANCE SOMALIA - {messageType === 'overdue' ? 'OVERDUE TAX PAYMENT NOTICE' : 'TAX PAYMENT DEADLINE REMINDER'}</p>
            <p>{messageContent}</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md"
        >
          Send Payment Reminder
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
