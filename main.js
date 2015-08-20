var Slack = require('slack-client')

var token = 'xoxb-9413434128-C4a2n3MOwmZsNq0B0j2pUDCh',
  autoReconnect = true,
  autoMark = true

var slack = new Slack(token, autoReconnect, autoMark)

slack.on('open', function() {
  console.log('Connected!')
  // channels = []
  // groups = []
  // unreads = slack.getUnreadCount()

  // # Get all the channels that bot is a member of
  // channels = ("##{channel.name}" for id, channel of slack.channels when channel.is_member)

  // # Get all groups that are open and not archived 
  // groups = (group.name for id, group of slack.groups when group.is_open and not group.is_archived)

  // console.log "Welcome to Slack. You are @#{slack.self.name} of #{slack.team.name}"
  // console.log 'You are in: ' + channels.join(', ')
  // console.log 'As well as: ' + groups.join(', ')

  // messages = if unreads is 1 then 'message' else 'messages'

  // console.log "You have #{unreads} unread #{messages}"
})

slack.on('message', function(message) {
  console.log(slack.users[message.user]); 
  var channel = slack.getChannelGroupOrDMByID(message.channel), 
    user = slack.getUserByID(message.user)
    channel.send("Hola " + user.name)
  // response = ''

  // {type, ts, text} = message

  // channelName = if channel?.is_channel then '#' else ''
  // channelName = channelName + if channel then channel.name else 'UNKNOWN_CHANNEL'

  // userName = if user?.name? then "@#{user.name}" else "UNKNOWN_USER"

  // console.log """
  //   Received: #{type} #{channelName} #{userName} #{ts} "#{text}"
  // """

  // # Respond to messages with the reverse of the text received.
  // if type is 'message' and text? and channel?
  //   response = text.split('').reverse().join('')
  //   channel.send response
  //   console.log """
  //     @#{slack.self.name} responded with "#{response}"
  //   """
  // else
  //   #this one should probably be impossible, since we're in slack.on 'message' 
  //   typeError = if type isnt 'message' then "unexpected type #{type}." else null
  //   #Can happen on delete/edit/a few other events
  //   textError = if not text? then 'text was undefined.' else null
  //   #In theory some events could happen with no channel
  //   channelError = if not channel? then 'channel was undefined.' else null

  //   #Space delimited string of my errors
  //   errors = [typeError, textError, channelError].filter((element) -> element isnt null).join ' '

  //   console.log """
  //     @#{slack.self.name} could not respond. #{errors}
  //   """
})

slack.login()
