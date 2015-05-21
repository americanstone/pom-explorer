package fr.lteconsulting.pomexplorer;

import io.undertow.websockets.core.WebSocketChannel;
import io.undertow.websockets.core.WebSockets;

public class Client
{
	private final int id;

	private final WebSocketChannel channel;

	private WorkingSession currentSession;

	public Client(int id, WebSocketChannel channel)
	{
		this.id = id;
		this.channel = channel;
	}

	public WorkingSession getCurrentSession()
	{
		return currentSession;
	}

	public void setCurrentSession(WorkingSession currentSession)
	{
		this.currentSession = currentSession;
	}

	public int getId()
	{
		return id;
	}

	public WebSocketChannel getChannel()
	{
		return channel;
	}
	
	public void send(String messageData)
	{
		WebSockets.sendText(messageData, channel, null);
	}
}
